 (for i in *.js; do echo "- [$i](./$i) "`head -1 $i`; done) >> README.md
