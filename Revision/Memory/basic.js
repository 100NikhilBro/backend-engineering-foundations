// MemoryLeak 
// -> it simply means that when a program holds the memory and it does not use 
// -> because of that the garbageCollector(GC) is failed to clean it 

// InJS
// ----> unused refrences cause - MemoryLeak
// ----> events without removeEvents - MemoryLeak
// ----> setInterval without cleanInterval - MemoryLeak



// Note -> If u apply .addEventListener - then also think about the .removeEventListener
// Note -> If u apply .setInterval[return id] - then also think about then .clearInterval(id);