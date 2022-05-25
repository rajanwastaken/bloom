var matches = {
    "nodes": [
      {"id": "ACTC", "group": 1},
      {"id": "ARSE", "group": 1},
      {"id": "ATM_1", "group": 1},
      {"id": "ATM_2", "group": 1},
      {"id": "BRCA1", "group": 1},
      {"id": "BRCA2_1", "group": 1},
      {"id": "BRCA2_2", "group": 1},
      {"id": "BRCA2_3", "group": 1},
      {"id": "BRCA2_4", "group": 1},
      {"id": "BRCA2_5", "group": 1},
      {"id": "BRCA2_6", "group": 2},
      {"id": "CACNA1A", "group": 2},
      {"id": "CALR", "group": 3},
      {"id": "CALR", "group": 2},
      {"id": "CDH1", "group": 2},
      {"id": "CFTR", "group": 2},
      {"id": "CFTR1", "group": 3},
      {"id": "CFTR2", "group": 3},
      {"id": "CFTR3", "group": 3},
      {"id": "CLCN", "group": 3},
      {"id": "CHEK", "group": 3},
      {"id": "HEXA", "group": 3},
      {"id": "HLAB27", "group": 3},
      {"id": "HNF1A", "group": 3},
      {"id": "KCN2", "group": 4},
      {"id": "LDLR", "group": 4},
      {"id": "LHON", "group": 5},
      {"id": "LMNA", "group": 4},
      {"id": "MMACHC", "group": 0},
      {"id": "MMACHC1", "group": 2},
      {"id": "MYBPC3", "group": 3},
      {"id": "MYBPC3_1", "group": 2},
      {"id": "PALB2", "group": 2},
      {"id": "PALB2_2", "group": 2},
      {"id": "PKFM", "group": 2},
      {"id": "MYBPC3", "group": 2}
    ],
    "links": [
      {"source": "ARSE", "target": "ACTC", "value": 1},
      {"source": "ATM_1", "target": "ACTC", "value": 8},
      {"source": "ATM_2", "target": "ACTC", "value": 10},
      {"source": "ATM_2", "target": "ATM_1", "value": 6},
      {"source": "BRCA1", "target": "ACTC", "value": 1},
      {"source": "BRCA2_1", "target": "ACTC", "value": 1},
      {"source": "BRCA2_2", "target": "ACTC", "value": 1},
      {"source": "BRCA2_3", "target": "ACTC", "value": 1},
      {"source": "BRCA2_4", "target": "ACTC", "value": 2},
      {"source": "BRCA2_5", "target": "ACTC", "value": 1},
      {"source": "BRCA2_1", "target": "BRCA2_2", "value": 1},
      {"source": "BRCA2_3", "target": "ATM_2", "value": 3},
      {"source": "CACNA1A", "target": "ATM_1", "value": 3},
      {"source": "CACNA1A", "target": "ACTC", "value": 5},
      {"source": "CALR", "target": "CACNA1A", "value": 1},
      {"source": "CALR", "target": "CACNA1A", "value": 1},
      {"source": "CDH1", "target": "CACNA1A", "value": 1},
      {"source": "CFTR", "target": "CFTR1", "value": 1},
      {"source": "CFTR2", "target": "CFTR1", "value": 4},
      {"source": "CFTR3", "target": "CFTR1", "value": 4},
      {"source": "CFTR3", "target": "CFTR2", "value": 4},
      {"source": "CLCN", "target": "CFTR1", "value": 4},
      {"source": "CLCN", "target": "CFTR2", "value": 4},
      {"source": "CLCN", "target": "CFTR3", "value": 4},
      {"source": "CHEK", "target": "CFTR1", "value": 3},
      {"source": "CHEK", "target": "CFTR2", "value": 3},
      {"source": "CHEK", "target": "CFTR3", "value": 3},
      {"source": "CHEK", "target": "CLCN", "value": 4},
      {"source": "HEXA", "target": "CFTR1", "value": 3},
      {"source": "HEXA", "target": "CFTR2", "value": 3},
      {"source": "HEXA", "target": "CFTR3", "value": 3},
      {"source": "HEXA", "target": "CLCN", "value": 3},
      {"source": "HEXA", "target": "CHEK", "value": 5},
      {"source": "HLAB27", "target": "CFTR1", "value": 3},
      {"source": "HLAB27", "target": "CFTR2", "value": 3},
      {"source": "HLAB27", "target": "CFTR3", "value": 3},
      {"source": "HLAB27", "target": "CLCN", "value": 3},
      {"source": "HLAB27", "target": "CHEK", "value": 4},
      {"source": "HLAB27", "target": "HEXA", "value": 4},
      {"source": "HNF1A", "target": "CFTR1", "value": 3},
      {"source": "HNF1A", "target": "CFTR2", "value": 3},
      
    ]
  }

  fetch('production.json').then(res => res.json()).then(data => {
    const Graph = ForceGraph()
    (document.getElementById('graph'))
      .graphData(data)
      .nodeAutoColorBy('group')
      .onNodeDragEnd(node => {
        node.fx = node.x;
        node.fy = node.y;
      });
  });

  const commonPropTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    graphData: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
      links: PropTypes.arrayOf(PropTypes.object).isRequired
    }),
    backgroundColor: PropTypes.string,
    nodeRelSize: PropTypes.number,
    nodeId: PropTypes.string,
    nodeLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    nodeVal: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
    nodeVisibility: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.func]),
    nodeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    nodeAutoColorBy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    onNodeHover: PropTypes.func,
    onNodeClick: PropTypes.func,
    linkSource: PropTypes.string
  };
  
