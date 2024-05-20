

export function Stats({ items }) {
  //If there are no items just return one paragraph
  if (!items.length) return <p className="stats"><em>Start adding some packing list!</em></p>;

  const numItems = items.length;
  const numPacked = items.filter((item => item.packed)).length;
  const percentage = Math.round(numPacked / numItems * 100);


  return <footer className='stats'>
    <em>
      {percentage === 100 ? "You got everything! Ready to GOOOO!!!!✈️" : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
    </em>
  </footer>;
}
