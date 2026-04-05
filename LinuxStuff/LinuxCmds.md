# The List of commands the we commonly used in our system during the depolyment on Server .

--------------------------------------------------------

```pwd``` To check the present working directory

```cd {directoryName}``` To change the directory

```ls``` to see the list of files and folders 

```mkdir {directoryName}``` To make the directory

``` mkdir [folder1/folder2/folder3/{folderX,folderY}] ``` to make nested folder that looks tree type 

```touch {fileName1 fileName2 fileName3}``` To create the file 

```nano {fileName} ``` enter the content in file ... then -> ```Ctrl+O``` -> ``` Enter ``` -> ```Ctrl+X```

```rm {fileName1 fileName2}``` To remove the file or files 

```rm -r {directoryName}``` To remove the folder or directory

```cat {fileName}``` Use to show the content in file on terminal

```less {fileName}``` Use to show firstPage of File in terminal

```cp {file1} {file2}``` To copy the file content from file1 to file2

```head -n {numberOfLine} {fileName}``` To see the line from top of file

```tail -n {numberOfLine} {fileName}``` to see the line from last of file 

```grep {"SeachWord"} {fileName} ``` to seach word in fileName - <i>it is one of the most impotant and used Commands so later i added the useCase of it with other cmds</i>

```ls -l {fileName}``` in output , this shows r(read) , write(w) and execute(x) like things so by seeing those u understand it is executable or not 

```chmod -x {fileName} ``` this command make the file executable if it is non executable and check it become by ```ls -l {fileName}```

```ps aux ``` Show all the process that runs 

```ps aux | grep {bash} ``` By running this command we see the all process in that bash and then we kill them if we want using the ``` kill {processId}``` 

```top``` Shows the Information about machine

```htop``` This is similiar to top but shows information with some colors

```curl {https://api.freeapi.app/api/v1/public} ``` Call to this Api and shows the data in terminal

``` curl -I {https://api.freeapi.app/api/v1/public}``` Call to this Api and shows its header information 

``` curl -o {fileName.json} {https://api.freeapi.app/api/v1/public} ``` Call to this Api and whatever you recived same in that file 

```wget``` something that we want to intall on our system through urls

```uptime``` This shows the from what time my systen is up

```ss tuln``` Shows All ports where our Application listening 

```man {command}``` Shows the information about the particular 
command



- Tab Key - for autocomplete
- ctrl + L - for freshLine











