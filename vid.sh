#!/bin/bash

index=18
weblinks="
https://www.youtube.com/watch?v=Sg5i9YInU64
https://www.youtube.com/watch?v=K6tsgzFvVI0
https://www.youtube.com/watch?v=DEzXz4G3HS8
https://www.youtube.com/watch?v=fzbCeVQqrxA
https://www.youtube.com/watch?v=n7ICjWJivec
https://www.youtube.com/watch?v=db69Ot2Tlo8
https://www.youtube.com/watch?v=xk1QNW2Hr_U
https://www.youtube.com/watch?v=HclxgVmpTjI
https://www.youtube.com/watch?v=93B_ymBb7ds
https://www.youtube.com/watch?v=bXD9VmbOLKA
https://www.youtube.com/watch?v=R7dG9UlzeFM
"

for curlink in $weblinks; do

   #echo "--- Link ${index}: ${curlink}"

   ipython genvid.py ${index} ${curlink}

   index=$((index+1))

done




#
# End of script
#
