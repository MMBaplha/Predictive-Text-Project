const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    let results = [];

    if (str.length > 0) {
        results = fruit.filter(item => item.toLowerCase().includes(str.toLowerCase()));
    }

    return results;
}

function searchHandler(e) {
    const inputVal = e.target.value;
    const results = search(inputVal);
    showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
    suggestions.innerHTML = ''; // Clear previous suggestions

    if (results.length > 0) {
        results.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;

            // Add event listener for hover to highlight suggestion
            li.addEventListener('mouseenter', () => {
                li.style.backgroundColor = '#ddd';
            });
            li.addEventListener('mouseleave', () => {
                li.style.backgroundColor = '';
            });

            suggestions.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
    }
}

function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        input.value = e.target.textContent;
        suggestions.innerHTML = ''; // Clear suggestions after selection
    }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);