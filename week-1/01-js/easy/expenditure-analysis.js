/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let obj = {}
  for (const item of transactions) {
    let key = item.category;
    if (obj[key] == undefined) {
        obj[key] = item.price;
    } else {
        obj[key] += item.price;
    }
  }

  let ans = [];
    for (const key in obj) {
        let tem = {};
        tem['category'] = key;
        tem['totalSpent'] = obj[key];

        ans.push(tem)

    }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
