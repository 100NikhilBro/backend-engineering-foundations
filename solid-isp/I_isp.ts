
// interface DocumentManager {
//     openDocument():void;
//     closeDocument():void;
//     saveDocument():void;
//     scanDocument():void;
// }


// jo yeh DocumentManager - isko apne ko d/f - d/f interfaces mein todna padega 
//  feel kro ki kon se methods hum ek interfacse mein rakh sekte hai agr ek interface mein nhi rakh paa rhe then many interfaces


interface DocumentOpener{
    openDocument():void;
}

interface DocumentCloser{
    closeDocument():void;
}

interface DocumnetSaver{
    saveDocument():void;
}

interface DocumentScanner{
    scanDocument():void;
}


// Basic Editor mein apne ko nhi chaiye - scan wala then  
// Isp - bhi break nhi hua that is best one 


class MyBasicEditor implements DocumentOpener,DocumentCloser,DocumnetSaver{

    openDocument(): void {
        console.log('Open the Document');
    }

    closeDocument(): void {
        console.log('Close the Document');
    }

    saveDocument(): void {
        console.log('Save the Document')
    }
}

// Advance wale mein use kr liye 

class MyAdvanceEditor implements DocumentOpener,DocumentCloser , DocumentScanner, DocumnetSaver{
     openDocument(): void {
        console.log('Open the Document');
    }

    closeDocument(): void {
        console.log('Close the Document');
    }

    saveDocument(): void {
        console.log('Save the Document');
    }
    scanDocument(): void {
         console.log('Scan the Document');
    } 
}