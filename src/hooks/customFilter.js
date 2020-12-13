const customFilter = (value, data) => {
  switch (value.valor) {
    case "Menor que":
      return data.filter((x) => x[`${value.label}`] * 1 < value.inputValue * 1);
    case "Contem":
      return data.filter((x) =>
        x[`${value.label}`]
          .toLowerCase()
          .includes(`${value.inputValue.toLowerCase()}`)
      );
    case "Maior que":
      return data.filter((x) => x[`${value.label}`] * 1 > value.inputValue * 1);
    case "Menor ou igual":
      return data.filter(
        (x) => x[`${value.label}`] * 1 <= value.inputValue * 1
      );
    case "Maior ou igual":
      return data.filter(
        (x) => x[`${value.label}`] * 1 >= value.inputValue * 1
      );
    case "Diferente":
      data.filter(
        (x) =>
          x[`${value.label}`].toLowerCase() !=
          `${value.inputValue.toLowerCase()}`
      );

      return data.filter(
        (x) =>
          x[`${value.label}`].toLowerCase() !=
          `${value.inputValue.toLowerCase()}`
      );

    case "Igual a":
      return data.filter(
        (x) =>
          x[`${value.label}`].toLowerCase() ==
          `${value.inputValue.toLowerCase()}`
      );
    case "Não contem":
      return data.filter(
        (x) =>
          !x[`${value.label}`]
            .toLowerCase()
            .includes(`${value.inputValue.toLowerCase()}`)
      );
    default:
      return data;
  }
};

export default customFilter;
