
  const daily = [
    {
      id: 1,
      value: "Wake Up",
    },
    {
      id: 2,
      value: "Brush Teeth",
    },
    {
      id: 3,
      value: "Eat Breakfast",
    },
    {
      id: 4,
      value: "Sleep",
    },
  ];

  return (
    <>
      <ul>
        {daily.map((dailyitem) => {
          return <li key={dailyitem.id}>{dailyitem.value}</li>;
        })}
      </ul>
    </>
  );