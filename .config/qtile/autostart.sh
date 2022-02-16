#!/bin/sh

# systray battery icon
cbatticon -u 5 &
# systray volume
volumeicon &
# start Picom
~/.local/bin/picom-toggle.sh &
