
const Common = () => {
  const showOutletName = (type: string) => {
    return { CAPITAL: "Capital", PREMIER: "Premier", GNG: "g&g" }[type] || "";
  }

  return {
    showOutletName
  };
};

export default Common;
