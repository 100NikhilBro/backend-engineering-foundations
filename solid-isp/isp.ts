// Interface Segregation Principle



// interface is a contract like
// woh saari classes jo is interface ko implements kregi woh saari ek contrcat mein aagyi 
// ki unke pass yeh saare methods hone hi chaiye

interface DocumentManager {
    openDocument():void;
    closeDocument():void;
    saveDocument():void;
    scanDocument():void;
}

class BasicEditor implements DocumentManager{

    openDocument(): void {
        console.log('Open the Document');
    }

    closeDocument(): void {
        console.log('Close the Document');
    }

    saveDocument(): void {
        console.log('Save the Document')
    }

    // That violate the Isp principle - because we have one method here that is not used but imlplemented 
    scanDocument(): void {
        console.log(`Don't do anything`); 
    }

}


// Ab is violation se bachne ke liye hume ko interface ko 
// small interface mein todna padega - I_isp.ts dekho
