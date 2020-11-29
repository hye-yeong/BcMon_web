import bitcoinBlock from "./views/bitcoin/block.js"
import bitcoinNetwork from "./views/bitcoin/network.js"
import bitcoinNode from "./views/bitcoin/node.js"
import bitcoinTx from "./views/bitcoin/transaction.js"

import ethereumBlock from "./views/ethereum/block.js"
import ethereumNetwork from "./views/ethereum/network.js"
import ethereumNode from "./views/ethereum/node.js"
import ethereumTx from "./views/ethereum/transaction.js"
import ethereumSmartContract from "./views/ethereum/smartContract.js"

import temporaryPage from "./views/temporaryPage.js";

//monitering site category
import MarketChart from "./views/monitering_sites/market_chart.js"
import BlockchainChart from "./views/monitering_sites/blockchain_chart.js"
import BlockchainExplorer from "./views/monitering_sites/blockchain_explorer.js"

import bitcoin_forensic from "./views/advanced_analysis/bitcoin_forensic/bitcoin_forensic.js"
import illegal_component from "./views/advanced_analysis/illegal/component_.js"
import analysis_ddos from "./views/advanced_analysis/ddos.js"
import advancedManagement from "./views/advanced_analysis/management.js"

const routes = [
  {
    collapse: true,
    name: "Bitcoin",
    icon: "tim-icons",
    state: "components_Down",
    views: [
      {
        path: "/bitcoin/node_menu",
        name: "Node",
        mini: "node",
        component: bitcoinNode,
        layout: "/admin"
      },
      {
        path: "/bitcoin/network_menu",
        name: "Network",
        mini: "Mining",
        component: bitcoinNetwork,
        layout: "/admin"
      },
      {
        path: "/bitcoin/tx_menu",
        name: "Transaction",
        mini: "Block",
        component: bitcoinTx,
        layout: "/admin"
      },
      {
        path: "/bitcoin/block_menu",
        name: "Block",
        mini: "Network",
        component: bitcoinBlock,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Ethereum",
    icon: "tim-icons",
    state: "components_UP",
    views: [
      {
        path: "/ethereum/block_menu",
        name: "Block",
        mini: "Block",
        component: ethereumBlock,
        layout: "/admin"
      },
      {
        path: "/ethereum/network_menu",
        name: "Network",
        mini: "Network",
        component: ethereumNetwork,
        layout: "/admin"
      },
      {
        path: "/ethereum/node_menu",
        name: "Network",
        mini: "Node",
        component: ethereumNode,
        layout: "/admin"
      },
      {
        path: "/ethereum/tx_menu",
        name: "Transaction",
        mini: "Tx",
        component: ethereumTx,
        layout: "/admin"
      },
      {
        path: "/ethereum/smartcontract_menu",
        name: "Smart Contract",
        mini: "SmartContract",
        component: ethereumSmartContract,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Advanced",
    icon: "tim-icons",
    state: "components_advanced",
    views: [
      {
        path: "/advanced/forensic_menu",
        name: "Blockchain Forensic",
        mini: "Blockchain Forensic",
        component: bitcoin_forensic,
        layout: "/admin"
      },
      {
        path: "/advanced/Forensic_menu",
        name: "Blockchain Forensic",
        mini: "Blockchain Forensic",
        component: bitcoin_forensic,
        layout: "/admin"
      },
      {
        path: "/advanced/ddos",
        name: "DDoS",
        mini: "DDoS",
        component: analysis_ddos,
        layout: "/admin"
      },
      {
        path: "/advanced/DDos",
        name: "Bitcoin DDoS",
        mini: "Bitcoin DDoS",
        component: analysis_ddos,
        layout: "/admin"
      },
      {
        path: "/advanced/illegal_menu",
        name: "illegal",
        mini: "illegal",
        component: temporaryPage,
        layout: "/admin"
      },
      {
        path: "/advanced/management_menu",
        name: "Management",
        mini: "Management",
        component: advancedManagement,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Monitering sites",
    icon: "tim-icons icon-notes",
    state: "component_state",
    views: [
      {
        path: "/monitering/blockchain_sites",
        name: " Blockchain Chart",
        mini: "BC",
        component: BlockchainChart,
        layout: "/admin"
      },
      {
        path: "/monitering/blockchain_explorer",
        name: "Blockchain Explorer",
        mini: "BE",
        component: BlockchainExplorer,
        layout: "/admin"
      },
      {
        path: "/monitering/market_chart",
        name: "Market Chart",
        mini: "MC",
        component: MarketChart,
        layout: "/admin"
      }
    ]
  }

];

export default routes;
