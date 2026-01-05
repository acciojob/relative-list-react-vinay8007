const RelativeList=() =>{
  const relatives = ["Brother", "Sister", "Unti", "Uncle", "Grandparests"];

  return (
    <ol key="relativeList">
      {relatives.map(relative, index)(
      <li key={`relativeListItems${index + 1}`}>
        {relative}
      </li>
      )}
    </ol>
  );
}

export default RelativeList;
