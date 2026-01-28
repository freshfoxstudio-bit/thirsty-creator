import React, { useState, useEffect } from 'react';

function Recipes() {
  // Base drink list
  const baseDrinks = [
    { name: 'Virgin Mojito', ingredients: ['Mint', 'Lime', 'Soda Water', 'Sugar'] },
    { name: 'Sunset Cooler', ingredients: ['Orange Juice', 'Grenadine', 'Sparkling Water'] },
    { name: 'Berry Fizz', ingredients: ['Mixed Berries', 'Lemonade', 'Soda Water'] },
    { name: 'Tropical Punch', ingredients: ['Pineapple Juice', 'Mango Juice', 'Coconut Water'] },
    { name: 'Citrus Splash', ingredients: ['Grapefruit Juice', 'Lime', 'Sparkling Water'] },
  ];

  const [allDrinks, setAllDrinks] = useState(baseDrinks);
  const [randomDrinks, setRandomDrinks] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [search, setSearch] = useState('');
  const [customName, setCustomName] = useState('');
  const [customIngredients, setCustomIngredients] = useState('');

  // Generate random drinks list on page load
  useEffect(() => {
    const shuffled = [...allDrinks].sort(() => 0.5 - Math.random());
    setRandomDrinks(shuffled.slice(0, 3)); // show 3 random drinks
  }, [allDrinks]);

  // Handle search
  const handleSearch = () => {
    const found = allDrinks.find(
      (d) => d.name.toLowerCase() === search.toLowerCase()
    );
    if (found) setSelectedRecipe(found);
    else alert('No drink found!');
  };

  // Handle custom drink creation
  const handleCustom = () => {
    if (!customName || !customIngredients) {
      alert('Please enter name and ingredients (comma-separated)');
      return;
    }
    const ingredientsArray = customIngredients.split(',').map((i) => i.trim());
    const newDrink = { name: customName, ingredients: ingredientsArray };
    setAllDrinks([...allDrinks, newDrink]);
    setSelectedRecipe(newDrink);
    setCustomName('');
    setCustomIngredients('');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFDEE9, #B5FFFC)',
        fontFamily: 'Comic Sans MS, sans-serif',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1 style={{ fontSize: '3rem', color: '#FF6F61', textShadow: '2px 2px #FFD93D', marginBottom: '20px' }}>
        Your Fun Drink Generator!
      </h1>

      {/* Link to admin page */}
      <div style={{ marginBottom: '20px' }}>
        <a href="/admin" style={{ color: '#FF6F61', fontWeight: 'bold', textDecoration: 'underline' }}>
          Go to Admin Page
        </a>
      </div>

      {/* Search bar */}
      <div style={{ marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="Search drink..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #FF6F61',
            marginRight: '10px',
            width: '200px',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            borderRadius: '10px',
            border: 'none',
            background: '#FF6F61',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>

      {/* Custom drink */}
      <div style={{ marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="Custom drink name"
          value={customName}
          onChange={(e) => setCustomName(e.target.value)}
          style={{ padding: '10px', borderRadius: '10px', border: '1px solid #FF6F61', marginRight: '10px', width: '150px' }}
        />
        <input
          type="text"
          placeholder="Ingredients (comma separated)"
          value={customIngredients}
          onChange={(e) => setCustomIngredients(e.target.value)}
          style={{ padding: '10px', borderRadius: '10px', border: '1px solid #FF6F61', marginRight: '10px', width: '250px' }}
        />
        <button
          onClick={handleCustom}
          style={{
            padding: '10px 20px',
            borderRadius: '10px',
            border: 'none',
            background: '#FF6F61',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Add Custom Drink
        </button>
      </div>

      {/* Random drinks list */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#FF6F61', textShadow: '1px 1px #FFD93D' }}>Random Drinks</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          {randomDrinks.map((d, i) => (
            <div
              key={i}
              onClick={() => setSelectedRecipe(d)}
              style={{
                background: 'white',
                padding: '15px',
                borderRadius: '15px',
                cursor: 'pointer',
                boxShadow: '0 0 15px #FF6F61',
                minWidth: '120px',
              }}
            >
              {d.name}
            </div>
          ))}
        </div>
      </div>

      {/* Selected recipe */}
      {selectedRecipe && (
        <div
          style={{
            background: 'white',
            padding: '20px',
            borderRadius: '20px',
            boxShadow: '0 0 20px #FF6F61',
            display: 'inline-block',
            textAlign: 'left',
          }}
        >
          <h2 style={{ fontSize: '2rem', color: '#FF6F61' }}>{selectedRecipe.name}</h2>
          <ul>
            {selectedRecipe.ingredients.map((ing, i) => (
              <li key={i} style={{ fontSize: '1.2rem', margin: '5px 0' }}>
                {ing}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Recipes;
