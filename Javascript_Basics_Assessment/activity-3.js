const nameList = ['George', 'Lisa', 'Glenna'];

while (nameList < 6) {
    const name = prompt('Please enter a name.');
    nameList.push(name);
}

for (let i = 0; i < nameList.length; i++) {
    console.log(nameList[i]);
}