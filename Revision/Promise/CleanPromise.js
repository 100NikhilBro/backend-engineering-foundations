// Async | Await - are the promises with clean syntax

// async - always return a Promise

// We generally and commonly used this form of promise frequently

async function test() {

    const data = await fetchData();

    return data;

}


async function test() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}