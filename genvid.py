#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import os

index = sys.argv[1]
website = sys.argv[2]
embed = os.path.basename( website )[8:]


outstr="""
## Örnek ({index}) &ndash; Emniyet Kemeri

<iframe width="640" height="480" src="

http://www.youtube.com/embed/{embed}" frameborder="0" allowfullscreen></iframe>

<div class="website-link">
[{website}]({website})
</div>
"""

print( outstr.format( index=index, website=website, embed=embed ) ) 


#
# End of genvid.py
#

