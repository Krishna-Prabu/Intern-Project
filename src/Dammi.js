const MONTHS_LIST = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const DAY = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  const filterHandler = (data) => {
    console.log('filterData');
    setMonth(MONTHS_LIST[data.month]);
    setDay(DAY[data.day]);
    setDate(data.date);
    setYear(data.year);
    setDisplay(true);
    setTextT(false);
    setStoreData(items.filter(
      (item) =>

        DAY[new Date(item.at).getDay()] === day &&
        new Date(item.at).getDate() === date &&
        MONTHS_LIST[new Date(item.at).getMonth()] === month &&
        new Date(item.at).getFullYear() === year
    ));
  };
  const closeHandler = () => {
    setDisplay(false);
  };