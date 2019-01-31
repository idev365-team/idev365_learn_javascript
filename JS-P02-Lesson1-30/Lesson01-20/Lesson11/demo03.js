function walkTree(node) {
    if (node == null) // 
      return;
    
      console.log(node.name)
    // do something with node
    if(node.childNodes){
        for (var i = 0; i < node.childNodes.length; i++) {
        
            walkTree(node.childNodes[i]);
          }
    }
    
  }


let node = {
    name:"node-01",
    childNodes:[
        {
            name:"node-02",
            childNodes:[
                {
                    name:"node-21",
                },
                {
                    name:"node-22",
                },
                {
                    name:"node-23",
                },
            ]
        },
        {
            name:"node-03",
        },
        {
            name:"node-04",
        },
    ]
}

walkTree(node)