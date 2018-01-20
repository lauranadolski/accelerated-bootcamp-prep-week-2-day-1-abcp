var myDocument = [
 // to get the object out of the first array index = myDocument[0].children[0].children
 // myDocument[0].children[0].children returns an array. If I wanted to grab the value key of the first object in this array.
 var listItems = myDocument[0].children[0].children
 // To get the first item out, 
 // We can drill down into the nested DOM using tools we already have.
 
 
  {
    tagName: "div",
    children: [
      {
        tagName: "ul",
        children: [
          {tagName: "li", value: "list item 1"},
          {tagName: "li", value: "list item 2"},
          {tagName: "li", value: "list item 3"}
        ]
      }
    ]
  },
  {
    tagName: "div",
    children: [
      {
        tagName: "form",
        children: [
          {
            tagName: "input",
            type: "text",
            value: "name"
          },
          {
            tagName: "input",
            type: "submit"
          }
        ]
      }
    ]
  },
  {
    tagName: "div",
    children: [
      {
        tagName: "p",
        value: "I'm a paragraph"
      }
    ]
  }
]
