import swal from "sweetalert";
export const showNotificationMessage = (title, type) => {
  swal(title, "", type);
};

export const divideArrayToPages = (items) => {
  let pages = [];
  let i,
    j,
    temporary,
    chunk = 6;
  let count = 1;

  for (i = 0, j = items.length; i < j; i += chunk) {
    temporary = items.slice(i, i + chunk);
    pages.push(temporary);
    count = count + 1;
  }

  return pages;
};
