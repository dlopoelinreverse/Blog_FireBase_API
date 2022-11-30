export const dateFormater = (date) => {
  let days = Math.floor((new Date() - new Date(date)) / (1000 * 3600 * 24));
  let minutes = Math.floor((new Date() - new Date(date)) / (1000 * 60));

  if (days === 0) {
    if (minutes > 1) {
      if (minutes > 59) {
        let hours = Math.floor(minutes / 60);
        return (
          "aujourd'hui, il y a " + hours + (hours > 1 ? " heures" : " heure")
        );
      } else {
        return "aujourd'hui, il y a " + minutes + " minutes";
      }
    } else {
      return "aujourd'hui, il y a moins d'une minute";
    }
  } else if (days === 1) {
    return "il y a 1 jour";
  } else {
    return "il y a " + days + " jours";
  }
};
