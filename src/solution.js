const banditSolutions = [
    {
        id: "Start CTF Challenge",
        title: "Level 0",
        goal: "Login into the server using SSH. The host to which you need to connect is bandit0@bandit.labs.overthewire.org,on port 2220. The username is bandit0 and password is badnit0",
        steps: [
            { label: "Connection", description:"",dir:"$", command: "ssh bandit0@bandit.labs.overthewire.org -p 2220", output: `
                         _                     _ _ _
                        | |__   __ _ _ __   __| (_) |_
                        | '_ \\ / _\` | '_ \\ / _\` | | __|
                        | |_) | (_| | | | | (_| | | |_
                        |_.__/ \\__,_|_| |_|\\__,_|_|\\__|


                      This is an OverTheWire game server.
            More information on http://www.overthewire.org/wargames

backend: gibson-0
bandit0@bandit.labs.overthewire.org's password:bandit0` },
            { label: "Find Password",description:"",dir:"bandit0@bandit:~$",command:``, output: "" },
            { label: "⚠ Note",description:"",dir:"",command: "I made this repository to save my data and also help others if you find something wrong you google it the methods/command I used it can use in many ways ", output: "" }
        ]
    },
    {
        id: "level0",
        title: "Level 0 → Level 1",
        goal: "The password for the next level is stored in a file called 'readme' located in the home directory. Use this password to log into bandit1 using SSH.",
        steps: [
            { label: "Connection",description:"",dir:"$",command: "ssh bandit0@bandit.labs.overthewire.org -p 2220", output: "bandit0@bandit.labs.overthewire.org's password:bandit0" },
            { label: "Locate readme file using ls command",description:"",dir:"bandit0@bandit:~$", command: "ls", output: "readme" },
            { label: "Use cat command",description:"",dir:"bandit0@bandit:~$", command: "cat readme", output: "ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If" }
        ]
    },
    {
        id: "level1",
        title: "Level 1 → Level 2",
        goal: "The password is in a file named '-' in the home directory. Here is new thing instead of text file name is special character",
        steps: [
            { label: "Put password that you get in level0",description:"",dir:"$",command: "ssh bandit1@bandit.labs.overthewire.org -p 2220", output: "bandit1@bandit.labs.overthewire.org's password:" },
            { label: "Ls to check file in directory",description:"",dir:"bandit1@bandit:~$",command: "ls", output: "-" },
            { label: "Read hyphenated file",description:"",dir:"c",command: "cat ./-", output: "263JGJPfgU6LtdEvgfWU1XP5yac29mFx" },
            { label: "Why we use ./ insetad simple cat -",description:"",dir:"",command: "You can use simple 'cat -' and see what happen. if you use hypen linux think you are going to type command so it give balnk line to put input but you want to read file thats why we use ./ to tell linux the written hypen is file name not command", output: "Let's move on next level" }
        ]
    },
    {
        id: "level2",
        title: "Level 2 → Level 3",
        goal: "The password for next level is stored in file called '--spaces in this filename--' in the home directory.",
        steps: [
            { label: "Put password that you get in level1",description:"",dir:"$",command: "ssh bandit2@bandit.labs.overthewire.org -p 2220", output: "bandit2@bandit.labs.overthewire.org's password:" },
            { label: "Use ls command",description:"This file name is unique also similar to previous level like level1 this file aslo contain hypen as you know for hypen file we use ./ but twist is that file name contain spaces for this we have two method",dir:"bandit2@bandit:~$",command: "ls", output: "--spaces in this filename--" },
            { label: "Method 1",description:"Use \"\" these quotes ",dir:"bandit2@bandit:~$",command: "cat \"./--spaces in this filename--\"", output: "MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx" },
            { label: "Method 2",description:"Use \\ these slashes for each gaps ",dir:"bandit2@bandit:~$",command: "cat ./--spaces\\ in\\ this\\ filename--", output: "MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx" }
        ]
    },
    {
        id: "level3",
        title: "Level 3 → Level 4",
        goal: "The password for next level is stored in a hidden file in the inhere directory.",
        steps: [
            { label: "Put password that you get in level2",description:"",dir:"$",command: "ssh bandit3@bandit.labs.overthewire.org -p 2220", output: "bandit3@bandit.labs.overthewire.org's password:" },
            { label: "Use cd command",description:"Use cd command to change directory to 'inhere' as given in instruction",dir:"bandit3@bandit:~$",command: "cd inhere", output: "" },
            { label: "Use ls -a command",description:"-a use for all file you can check all comands of ls using man ls",dir:"bandit3@bandit:~/inhere$",command: "ls -a", output: ". .. ...Hiding-From-You" },
            { label: "cat",description:"",dir:"bandit3@bandit:~/inhere$",command: "cat ...Hiding-From-You", output: "2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ" },
        ]
    },
    {
        id: "level4",
        title: "Level 4 → Level 5",
        goal: "The password for next level is stored in the only human-readable file in the inhere directory.",
        steps: [
            { label: "Put password that you get in level3",description:"",dir:"$",command: "ssh bandit4@bandit.labs.overthewire.org -p 2220", output: "bandit4@bandit.labs.overthewire.org's password:" },
            { label: "Use cd command",description:"Use cd command to change directory to 'inhere' as given in instruction",dir:"bandit4@bandit:~$",command: "cd inhere", output: "" },
            { label: "Use ls command",description:"-",dir:"bandit4@bandit:~/inhere$",command: "ls", output: "-file00 -file02 file04 -file06 -file08\n-file01 -file03 -file05 -file07 -file09" },
            { label: "Crazy",description:"There are lot of file and only one file has password other are binary files did you notice file contain hypen thats we learn in level1 and 2\nNow use file command. Here you notices i use * For file type this command written all files type ./ For hypen as we learn in lvl 1 & 2",dir:"bandit4@bandit:~/inhere$",command: "file ./*", output: "./file00: data\n./file01: data\n./file02: data\n./file03: data\n./file04: data\n./file05: data\n./file06: data\n./file07: ASCII text\n./file08: data\n./file09: data\n" },
            { label: "Use cat command",description:"As outpout showing -file07 is ASCII text that is human readable",dir:"bandit4@bandit:~/inhere$",command: "cat ./-file07", output: "4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw" },
        ]
    },
    {
        id: "level5",
        title: "Level 5 → Level 6",
        goal: "The password for next level is stored in file somewhere under the inhere directory and has all of the following\n\nProperties:\nhumane-readable\n1033 bytes in size\nnot executable.",
        steps: [
            { label: "Put password that you get in level4",description:"",dir:"$",command: "ssh bandit5@bandit.labs.overthewire.org -p 2220", output: "bandit5@bandit.labs.overthewire.org's password:" },
            { label: "Use cd command",description:"Use cd command to change directory to 'inhere' as given in instruction",dir:"bandit5@bandit:~$",command: "cd inhere", output: "" },
            { label: "Use ls command",description:"",dir:"bandit5@bandit:~/inhere$",command: "ls", output: "maybehere00 maybehere04 maybehere08 maybehere12 maybehere16\nmaybehere01 maybehere05 maybehere09 maybehere13 maybehere17\nmaybehere02 maybehere06 maybehere10 maybehere14 maybehere18\nmaybehere03 maybehere07 maybehere11 maybehere15 maybehere19" },
            { label: "",description:"There are lot of dir and only one dir has password file ",dir:"bandit5@bandit:~/inhere$",command: "find . -type f -size 1033c -not -executable -exec file {} + | grep ASCII", output: "./maybehere07/.file2: ASCII text, with very long lines" },
            { label: "",description:"method 2 ",dir:"bandit5@bandit:~/inhere$",command: "find . -type f -size 1033c -not -executable ", output: "./maybehere07/.file2" },
            { label: "Command explanation",description:"",dir:"",command:". search the current working directory -type f looks for files only -size 1033c look for file that are 1033 bytes c represent bytes -not -executable find only one not executable file  -exec file{} execuate the file command on all results {} placedhlder for the location where the names of files found + for terminate grep command to  find pattrens in string its like search", output: "" },
            { label: "Read file",description:"",dir:"bandit5@bandit:~/inhere$",command:"cat ./maybehere07/.file2",output:"HWasnPhtq9AVKe0dmk45nxy20cvUa6EG"}
        ]
    },
    {
        id: "level6",
        title: "Level 6 → Level 7",
        goal: "The password for next level is stored somewhere on the server and has all of the properties:\n\nowned by user bandit7\nowned by group 6\n 33 bytes in size.",
        steps: [
            { label: "Put password that you get in level5",description:"",dir:"$",command: "ssh bandit6@bandit.labs.overthewire.org -p 2220", output: "bandit6@bandit.labs.overthewire.org's password:" },
            { label: "Use find command",description:"I use find command. what you need to understand is 2>/dev/null this command remove other stuff",dir:"bandit6@bandit:~$",command:"find / -user bandit7 -group bandit6 -size 33c 2>/dev/null", output: "/var/lib/dpkg/info/bandit7.password" },
            { label: "Use cat command",description:"",dir:"bandit6@bandit:~$",command:"cat /var/lib/dpkg/info/bandit7.password", output: "morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj" }
            
        ]
    },
    {
        id: "level7",
        title: "Level 7 → Level 8",
        goal: "The password for next level is stored in the file data.txt next to the word millionth",
        steps: [
            { label: "Put password that you get in level6",description:"",dir:"$",command: "ssh bandit7@bandit.labs.overthewire.org -p 2220", output: "bandit7@bandit.labs.overthewire.org's password:" },
            { label: "Use cat command",description:"simple",dir:"bandit7@bandit:~$",command:"cat data.txt | grep millionth", output: "dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc" }            
        ]
    },
    {
        id: "level8",
        title: "Level 8 → Level 9",
        goal: "The password for next level is stored in the file data.txt and is the only line of text that occurs only once",
        steps: [
            { label: "Put password that you get in level7",description:"Read Piping and Redirection",dir:"$",command: "ssh bandit8@bandit.labs.overthewire.org -p 2220", output: "bandit8@bandit.labs.overthewire.org's password:" },
            { label: "Use cat with sort and uniq command",description:"",dir:"bandit8@bandit:~$",command:"cat data.txt \| sort \| uniq -u", output: "4CKMh1JI91bUIZZPXDqGanal4xvAg0JM" }            
        ]
    },
    {
        id: "level9",
        title: "Level 9 → Level 10",
        goal: "The password for next level is stored in the file data.txt in one of the few human-readable strings,preceded by several = characters",
        steps: [
            { label: "Put password that you get in level8",description:"",dir:"$",command: "ssh bandit9@bandit.labs.overthewire.org -p 2220", output: "bandit9@bandit.labs.overthewire.org's password:" },
            { label: "Use cat with strings and grep command",description:"",dir:"bandit9@bandit:~$",command:"cat data.txt \| strings -e s \| grep ===", output: "FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey" }           
        ]
    },
    {
        id: "level10",
        title: "Level 10 → Level 11",
        goal: "The password for next level is stored in the file data.txt which contain base64 encoded data",
        steps: [
            { label: "Put password that you get in level9",description:"",dir:"$",command: "ssh bandit10@bandit.labs.overthewire.org -p 2220", output: "bandit10@bandit.labs.overthewire.org's password:" },
            { label: "Use cat with base64 -d command",description:"I use base64 -d to decode file",dir:"bandit10@bandit:~$",command:"cat data.txt \| base64 -d", output: "dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr"}           
        ]
    }
];
