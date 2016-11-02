
Copy the following small block to your `.bashrc` file:

``` bash
if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
```

Copy the large text block below to your home directory as `.bash_aliases`, then type `source ~/.bashrc` to reload the file.

``` bash
#
# directory aliases
#

alias ll='ls -l'
alias lla='ls -la'
alias cd..='cd ..'


#
# git aliases
#

alias ga='git add'
alias gc='git commit -m'
alias gpo='git push origin'
alias gs='git status'


#
# class-centric aliases
#
# change this to the full directory where your Code 201 classwork exists

alias 201='cd ~/Documents/Code201/labwork'

#
# bash management aliases
#

alias edbash='vi ~/.bashrc'
alias edal='vi ~/.bash_aliases'
alias newdot='source ~/.bashrc'
```
