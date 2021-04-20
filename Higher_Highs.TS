# Higher Highs checks the charts to see if the last 3 bars
# are closing higher.  This script was built for a watchlist.
# I will make one for scanners soon.
# Author: TechRancher
# Date: April, 2021
# Follow Me on GitHub https://www.github.com/TechRancher
# To read the README.md: https://www.github.com/TechRancher/Higher_Hights

# User Input
# No User Input

# Define Variables
def hi = close;

# Define Plot
plot trigger;
    if hi[3] < hi[2] and hi[2] < hi[1] and hi[1] < hi then {
        trigger = hi;
    } else {
        trigger = 0;
    };
AssignBackgroundColor(if trigger then color.BLUE else color.BLACK);