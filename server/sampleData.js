const shortLoremIpsum = `Lorem id sint aliqua tempor tempor sit. Ad dolor dolor ut nulla mollit dolore non eiusmod Lorem tempor nisi cillum.`;
const sampleData = {};
const longLoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
  non enim praesent elementum facilisis leo vel. Risus at ultrices mi
  tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
  tellus. Convallis convallis tellus id interdum velit laoreet id donec
  ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
  suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
  quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
  proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
  tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
  varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
  Lorem donec massa sapien faucibus et molestie ac.`;

// This class holds sample data used by some generated pages to show how they can be used.
// TODO Web Template Studio: Delete this file once your app is using real data.
sampleData.textAssets = [
  {
    shortDescription: shortLoremIpsum,
    longDescription: "The Toastmaster is a meeting's director and host.",
    title: "Toastmaster",
    status: "Closed",
    role: " ",
    shipTo: "Francisco Pérez-Olaeta",
    orderTotal: 2490.0,
    orderDate: new Date(2017, 5, 24).toDateString(),
    id: 1
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: "The Grammarian helps club members improve their grammar and vocabulary.",
    title: "Grammarian",
    status: "Closed",
    role: " ",
    shipTo: "Soo Jung Lee",
    orderTotal: 1760.0,
    orderDate: new Date(2017, 5, 24).toDateString(),
    id: 2
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: "organizes the Meeting venue and prepares it for the meeting.",
    title: "Sargent At Arms",
    status: "Shipped",
    role: " ",
    shipTo: "Run Liu",
    orderTotal: 665.0,
    orderDate: new Date(2017, 6, 3).toDateString(),
    id: 3
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: "The purpose of the Ah-Counter is to note any overused words or filler sounds.",
    title: "Ah-Counter",
    status: "Shipped",
    role: " ",
    shipTo: "Soo Jung Lee",
    orderTotal: 560.0,
    orderDate: new Date(2017, 6, 5).toDateString(),
    id: 4
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: "The General Evaluator evaluates everything that takes place during the club meeting.",
    title: "G.Evaluator",
    status: "New",
    role: " ",
    shipTo: "John Rodman",
    orderTotal: 810.0,
    orderDate: new Date(2017, 6, 7).toDateString(),
    id: 5
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: "Taking on this role improves organization skills, time management and facilitation skills.",
    title: "Topic Master",
    status: "New",
    role: " ",
    shipTo: "Elizabeth Andersen",
    orderTotal: 196.5,
    orderDate: new Date(2017, 6, 7).toDateString(),
    id: 6
  }
];

// TODO Web Template Studio: If you use a database replace this ID with the ID created by the database
sampleData.listID = 3;

sampleData.listTextAssets = [
  {
    text: shortLoremIpsum,
    _id: 1
  },
  {
    text: shortLoremIpsum,
    _id: 2
  }
];


module.exports = sampleData;
