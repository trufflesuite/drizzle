#!/usr/bin/env bash

set -e #-x

new_repo=${PWD}
base=git@github.com:trufflesuite

projects=(\
    drizzle \
    drizzle-react \
    drizzle-react-components \
    drizzle-vue-plugin
)


# Join branches across all projects
    # fix/coinbase-init-web3 \
branches=(\
    master \
    develop \
    next
)

# projects=(drizzle drizzle-vue-plugin)
# branches=(master develop)


# Clarify Josh's contribution to drizzle and drizzle-react
cmd_fix_contribution='
    # Get the current values of a single commit
    a_name="$GIT_AUTHOR_NAME"
    a_mail="$GIT_AUTHOR_EMAIL"
    a_date="$GIT_AUTHOR_DATE"
    c_name="$GIT_COMMITTER_NAME"
    c_mail="$GIT_COMMITTER_EMAIL"
    c_date="$GIT_COMMITTER_DATE"


    if [[
        "$a_mail" = "joshquin@gmail.com" &&
        "$a_name" = "Unknown" ||
        "$c_name" = "Unknown"
       ]]
    then
        # Fix the author/committer name/mail
        a_name="DiscRiskandBisque"
        a_mail="joshquin@gmail.com"
        c_name="DiscRiskandBisque"
        c_mail="joshquin@gmail.com"

        # Restore the commit date
        c_date="$a_date"

        # Export the changed values back to the environment
        export GIT_AUTHOR_NAME="$a_name"
        export GIT_AUTHOR_EMAIL="$a_mail"
        export GIT_AUTHOR_DATE="$a_date"
        export GIT_COMMITTER_NAME="$c_name"
        export GIT_COMMITTER_EMAIL="$c_mail"
        export GIT_COMMITTER_DATE="$c_date"
    fi
'

main () {
    echo "And away we go..."

    # initialize Lerna, commit to git
    lerna init
    git init
    git add .
    git commit -am "lerna init commit"

    # Pre create branches
    for branch in "${branches[@]}"; do
        if [ $branch != 'master' ]; then
            git checkout -b "$branch"
            git checkout -
        fi
    done

    for prj in "${projects[@]}"; do
        echo "Beginning merge for $prj"
        echo "==============================================================================="

        echo "  - Adding remote"
        git remote add "$prj" "$base/$prj"
        git fetch "$prj"

        echo "  - Filtering branches"
        git filter-branch \
            -f --index-filter \
            'rm -f "$GIT_INDEX_FILE" &&
                git read-tree --prefix='"packages/${prj}/"' "$GIT_COMMIT"' \
            --tag-name-filter cat \
            -- --tags --remotes="${prj}"

        echo "    - Preserve Tags for ${proj}/branch/${branch}"
        echo "        - rename tags"
        git filter-branch \
            -f --tag-name-filter 'sed s/$/-'"${prj}"'/' \
            -- --tags --remotes="${prj}"

        echo "        - delete original tags"
        git tag | grep -i -v ".drizzle" | xargs -n 1 git tag -d
        git tag | grep -i "drizzle.*drizzle" | xargs -n 1 git tag -d

        echo "   - Copying stable branches:"
        for branch in "${branches[@]}"; do
            if [ `git branch --remote --list "${prj}/${branch}"` ]; then
                echo "    - Merging branch ${branch}"

                git checkout "${branch}" 2>/dev/null || git checkout -b "${branch}"

                git filter-branch -f --tree-filter '

                    # Remove package-lock.json
                    [ -d '"./packages/${prj}"' ] && find '"./packages/${prj}"' -name package-lock.json -delete

                    # Prettier

                    git show $GIT_COMMIT --name-status |
                        grep "^[AM]\s" |
                        sed "s/^[AM][[:space:]]*//" |
                        grep -E -i -v '"^packages/${prj}/packages/"' |
                        grep -E -i '"^packages/${prj}/"' |
                        grep -E -e ".json$" -e ".jsx?$" |
                        grep -i -v "package-lock.json" |
                        grep -i -v ".tern-project" |
                        grep -i -v "dist/" |
                        tr "\n" " " |
                        xargs prettier     \
                            --no-config    \
                            --no-semi      \
                            --single-quote \
                            --write {} > /dev/null 2>&1 || \
                        echo "error formatting, possibly invalid JS"
                ' --tag-name-filter cat -- --all

                if [[ "${prj}" = "drizzle" || "${prj}" = "drizzle-react" ]]; then
                    git filter-branch -f --env-filter "${cmd_fix_contribution}" \
                    --tag-name-filter cat -- --all
                fi

                git merge --allow-unrelated-histories \
                    -m "Merge ${prj}/${branch} into ${branch}" \
                    "${prj}/${branch}"

                echo
            else
                echo "    - Skipping branch ${branch}"
            fi
        done

        echo "  - Removing remote"
        git remote rm "$prj"
        git checkout master
    done

    echo "done."
    echo
}

main
