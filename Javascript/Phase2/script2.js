const users = [
  { name: "John", city: "Delhi" },
  { name: "Aman", city: "Mumbai" },
  { name: "Rahul", city: "Delhi" },
  { name: "Priya", city: "Mumbai" },
  { name: "Neha", city: "Pune" }
];

const cityGroups = users.reduce((groups, user) =>{
    if(!groups[user.city]){
        groups[user.city] = [];
    }
    groups[user.city].push(user);
    return groups;
},{});
console.log(cityGroups);