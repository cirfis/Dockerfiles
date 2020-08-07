alias pacwt="pacman -Qiil"
alias pacis="pacman -Qs"
alias getdbusplayers="qdbus | grep org.mpris.MediaPlayer2 | sed 's/.*\.//'"
alias rsync-ssh='rsync -avzhe ssh --progress'
alias _=sudo
alias mussh=mosh $1 "tmux new -A -t" $1
#alias ~='cd ~'
#alias /='cd /'
alias df='df -h'                          # human-readable sizes
alias free='free -m'                      # show sizes in MB
alias more=less
alias bc='bc -l'
alias sha1='openssl sha1'


##-------------------------From bashrc-------------------------
# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && evalcache dircolors -b ~/.dircolors || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    alias dir='dir --color=auto'
    alias vdir='vdir --color=auto'

    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# some more ls aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

# Add an "alert" alias for long running commands.  Use like so:
#   sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval $(SHELL=/bin/sh lesspipe)
