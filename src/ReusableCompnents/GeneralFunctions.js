import swal from "sweetalert";
export const showNotificationMessage = (title, type) => {
  swal(title, "", type);
};

export const numToLetter = (num) => {
  let s = "",
    t;

  while (num > 0) {
    t = (num - 1) % 26;
    s = String.fromCharCode(65 + t) + s;
    num = ((num - t) / 26) | 0;
  }
  return s || undefined;
};
