// Spread -> ka mtlb unpack yaa expand krna




// most common 

const dbresults = [1, 2, 3];
const response = [...dbresults, 4];



// Backend mein 

const users = await User.find();
const response = [...users, { total: users.length }];



// Objects mein - old object ko safe rakha nye ko update - mongoose | prisma | sequelize 

const userFromDB = { id: 1, name: 'Nikhil', role: 'user' };

const updateUser = {
    ...userFromDB,
    role: 'admin',
}



// Note -> spreadOperator - shallowCopy create krta hai 

const a = { profile: { age: 20 } };
const b = {...a };

// Nested Object refrences share krte hai  

b.profile.age = 30;
console.log(a.profile.age); // 30 print nhi hoga