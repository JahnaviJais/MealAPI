import axios from "axios";
import { useState, useEffect } from "react";

function Meal() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="bg-white rounded-2xl shadow-lg p-4 transition-transform hover:scale-105">
        <img
          src={strMealThumb}
          className="rounded-xl w-full h-60 object-cover mb-4"
        />
        <section>
          <p className="text-lg font-semibold text-gray-800">{strMeal}</p>
          <p className="text-sm text-gray-500">ID: #{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Seafood Meals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {itemsList}
      </div>
    </div>
  );
}

export default Meal;
