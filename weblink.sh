#!/bin/bash
#
#===============================================================================
# Last modified: March 19, 2017
#
# Creates a website link for Markdown documents. Instead of typing a bunch of
# things, it is much better to use a script that automates the creation of
# website links. See below for usage details.
#===============================================================================

if [[ $# == 2 ]]; then

   http=$1
   name=$2

   #echo "${name}: ${http}"

   weblink="[${name}](${http})"

elif [[ $# == 1 ]]; then

   http=$1

   #echo "${http}"

   weblink="[${http}](${http})"

else
   echo ""
   echo "Usage:"
   echo ""
   echo "   $0 http_link [link_name]"
   echo ""
   echo "Examples:"
   echo ""
   echo "   $0 http://www.google.com Google"
   echo ""
   echo "   $0 http://www.google.com 'Click here to go to Google'"
   echo ""
   echo "   $0 http://www.google.com"
   echo ""
   exit 0
fi

echo ""
echo $weblink
echo ""

#
# End of script
#
