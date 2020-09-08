import figlet from 'figlet';

export const CommonConst = {
  Donut: 'Donut',
  Beer: 'Beer',
  Coffee: 'Coffee',
};

export const AsciiString = (...str) =>
  new Promise((resolve, reject) => {
    figlet(str.join(','), (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
