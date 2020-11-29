import Main from "./views/main.js";

//Bitcoin Node Info
import buffersize from "./views/bitcoin/node/used-buffer-size/average.js"
import cachedSize from "./views/bitcoin/node/used-cached-size/average.js"
import used_CPU from "./views/bitcoin/node/used-cpu/average.js"
import used_memory from "./views/bitcoin/node/used-memory/average.js"
import used_verificationprogres from "./views/bitcoin/node/used-verificationprogres/average.js"
import bytes from "./views/bitcoin/node/bytes/seconds.js"
import peer_count from "./views/bitcoin/node/peer-count/average.js"

//Bitcoin Network Info
import uniqueAddress_sum from "./views/bitcoin/network/number-of-unique-address/sum.js"
import uniqueAddress_total from "./views/bitcoin/network/number-of-unique-address/accumulated.js"
import icmpMessage_sum from "./views/bitcoin/network/icmp-messages/sum.js"
import interfacebytes_sum from "./views/bitcoin/network/interface-bytes/sum.js"
import ipPacket_sum from "./views/bitcoin/network/ip-packet/sum.js"
import tcpSegment_sum from "./views/bitcoin/network/tcp-segment/sum.js"
import udpDatagram_sum from "./views/bitcoin/network/udp-datagram/sum.js"

//Bitcoin Block Info
import blockSize_sum from "./views/bitcoin/block/block-size/sum.js"
import blockSize_total from "./views/bitcoin/block/block-size/accumulated.js"
import blockSize_average from "./views/bitcoin/block/block-size/average.js"
import rateOfChangeSize from "./views/bitcoin/block/block-size/size.js"

import difficulty from "./views/bitcoin/block/difficulty/average.js"

import insufficientSize from "./views/bitcoin/block/insufficient/size.js"
import insufficientStrippedsize from "./views/bitcoin/block/insufficient/Strippedsize.js"
import sumStrippedsize from "./views/bitcoin/block/strippedsize/sum.js"
import averageStrippedsize from "./views/bitcoin/block/strippedsize/average.js"

import averageWeight from "./views/bitcoin/block/weight/average.js"
import sumWeight from "./views/bitcoin/block/weight/sum.js"

import emptyblocks from "./views/bitcoin/block/emptyblocks.js"
import medianconfirmationtime from "./views/bitcoin/block/medianConfirmationtime.js"
import miningRevenue from "./views/bitcoin/block/miningRevenue.js"
import totalRevenue from "./views/bitcoin/block/totalRevenue.js"

import clustering from "./views/bitcoin/block/clustering.js"

//Transaction
import sumOfTx from "./views/bitcoin/transaction/number-of-transaction/sum.js"
import averageOfTx from "./views/bitcoin/transaction/number-of-transaction/average.js"
import totalTx from "./views/bitcoin/transaction/number-of-transaction/accumulated.js"
import totalOutput from "./views/bitcoin/transaction/output/sum.js"
import utxoCount from "./views/bitcoin/transaction/utxo-count/sum.js"
import nUtxo from "./views/bitcoin/transaction/nUtxo/accumulated.js"
import costOfTxVolume from "./views/bitcoin/transaction/cost-of-tx-volume/value.js"
import costPerTx from "./views/bitcoin/transaction/cost-per-tx/value.js"
import totalFee from "./views/bitcoin/transaction/fee/sum.js"
import ddos from "./views/bitcoin/transaction/DDos.js"

import averageNumberofvin from "./views/bitcoin/transaction/number-of-vin/average.js"
import averageNumberofVout from "./views/bitcoin/transaction/number-of-vout/average.js"
import averageRatioofInout from "./views/bitcoin/transaction/ratio-of-inout/average.js"
import predictionNumberofTransaction from "./views/bitcoin/transaction/predictionNumberofTransaction.js"
import rateOfChangeOutput from "./views/bitcoin/transaction/rate-of-change/output.js"
import rateOfChangeTransaction from "./views/bitcoin/transaction/rate-of-change/transaction.js"
import totalNumberofvin from "./views/bitcoin/transaction/number-of-vin/sum.js"
import totalNumberofVout from "./views/bitcoin/transaction/number-of-vout/sum.js"

//Explorer
import blockInfo from "./views/bitcoin/explorer/blockInfo.js"
import transactionInfo from "./views/bitcoin/explorer/transactionInfo.js"
import addressInfo from "./views/bitcoin/explorer/addressInfo.js"

//monitering sites
import BandwidthUsage from "./views/monitering_sites/bandwidth_usage.js"
import BitcoinAddress from "./views/monitering_sites/bitcoin_address.js"
import Block from "./views/monitering_sites/block.js"
import BlockchainWallet from "./views/monitering_sites/blockchain_wallt_activity.js"
import FunctionTimings from "./views/monitering_sites/function_timings.js"
import Mining from "./views/monitering_sites/mining.js"
import Mempool from "./views/monitering_sites/mempool.js"
import P2P_Messages from "./views/monitering_sites/p2p_messages.js"
import Peers from "./views/monitering_sites/peers.js"
import Script_Types from "./views/monitering_sites/script_types.js"
import System_metric from "./views/monitering_sites/system_metric.js"
import Transaction_M from "./views/monitering_sites/transaction.js"
import Unspent_tx_output_set from "./views/monitering_sites/unspent_Tx_Output_set.js"

//hyperledger
import hyperledgerBlock from "./views/hyperledger/block/blocks.js"
import hyperledgerTransaction from "./views/hyperledger/transaction/transactions.js"
import hyperledgerTotalBlock from "./views/hyperledger/block/totalBlock.js"
import hyperledgerTotalTransaction from "./views/hyperledger/transaction/totalTransaction.js"

//ethereum Node Info
import ethereumBuffersize from "./views/ethereum/node/used-buffer-size/average.js"
import ethereumCachedSize from "./views/ethereum/node/used-cached-size/average.js"
import ethereumUsed_CPU from "./views/ethereum/node/used-cpu/average.js"
import ethereumUsed_memory from "./views/ethereum/node/used-memory/average.js"

//ethereum blocks
import numberOfBlock_sum from "./views/ethereum/block/number-of-block/summation.js"
import numberOfBlock_total from "./views/ethereum/block/number-of-block/total.js"
import numberOfUncles_avg from "./views/ethereum/block/number-of-uncles/average.js"
import numberOfUncles_sum from "./views/ethereum/block/number-of-uncles/summation.js"
import numberOfUncles_total from "./views/ethereum/block/number-of-uncles/total.js"
import sizeOfBlock_avg from "./views/ethereum/block/size-of-block/average.js"
import sizeOfBlock_sum from "./views/ethereum/block/size-of-block/summation.js"
import sizeOfBlock_total from "./views/ethereum/block/size-of-block/total.js"

//ethereum transactions
import gasUsed_total from "./views/ethereum/transaction/gas-used/total.js"
import gasUsed_avg from "./views/ethereum/transaction/gas-used/average.js"
import gasUsed_sum from "./views/ethereum/transaction/gas-used/summation.js"
import numberOfTx_total from "./views/ethereum/transaction/number-of-transactions/total.js"
import numberOfTx_avg from "./views/ethereum/transaction/number-of-transactions/average.js"
import numberOfTx_sum from "./views/ethereum/transaction/number-of-transactions/summation.js"

//ethereum Network
import difficulty_sum from "./views/ethereum/network/difficulty/summation.js"
import difficulty_avg from "./views/ethereum/network/difficulty/average.js"

//ethereum SmartContract
import smartcontract_calling_cumulative from "./views/ethereum/smartcontract/calling/cumulative.js"
import smartcontract_calling_total from "./views/ethereum/smartcontract/calling/total.js"
import smartcontract_cumulative from "./views/ethereum/smartcontract/creation/cumulative.js"
import smartcontract_total from "./views/ethereum/smartcontract/creation/total.js"
import smartcontract_contribution_gasused from "./views/ethereum/smartcontract/contract_distribution/gasused.js"
import smartcontract_contribution_account from "./views/ethereum/smartcontract/contract_distribution/number-of-account.js"
import smartcontract_contribution_recentlyCalled from "./views/ethereum/smartcontract/contract_distribution/recently-called.js"

//advanced analysis
import ethereum_node_discovery from "./views/advanced_analysis/management/node_discovery.js"
import topology from "./views/advanced_analysis/management/topology.js"
import network_monitoring from "./views/advanced_analysis/management/network_monitoring.js"
import mempool from "./views/advanced_analysis/management/mempool_similarity.js"
import cmpBlock from "./views/advanced_analysis/management/block_propagation.js"
import icmp_component from "./views/advanced_analysis/management/chart_component/icmp.js"
import illegal_component from "./views/advanced_analysis/illegal/component_.js"

const componentRoutes = [
  {
    path: "/main",
    name: "Main",
    component: Main,
    layout: "/admin"
  },
  {
    path: "/bitcoin/node/buffer-size/average/year",
    name: "buffer size",
    component: buffersize,
    layout: "/admin"
  },
  {
    path: "/bitcoin/node/cached-size/average/year",
    name: "cached size",
    component: cachedSize,
    layout: "/admin"
  },
  {
    path: "/bitcoin/node/cpu/average/year",
    name: "CPU Usage",
    component: used_CPU,
    layout: "/admin"
  },
  {
    path: "/bitcoin/node/memory/average/year",
    name: "Memory Usage",
    component: used_memory,
    layout: "/admin"
  },
  {
    path: "/bitcoin/node/verificationprogres/average/year",
    name: "Verification Progress",
    component: used_verificationprogres,
    layout: "/admin"
  },
  {
    path: "/bitcoin/node/bytes/seconds/year",
    name: "bytes seconds",
    component: bytes,
    layout: "/admin"
  },
  {
    path: "/bitcoin/node/peer-count/average/year",
    name: "peer count",
    component: peer_count,
    layout: "/admin"
  },
  {
    path: "/bitcoin/network/number-of-unique-address/total/year",
    name: "number of unique address",
    component: uniqueAddress_sum,
    layout: "/admin"
  },
  {
    path: "/bitcoin/network/number-of-unique-address/cumulative/year",
    name: "number of unique address",
    component: uniqueAddress_total,
    layout: "/admin"
  },
  {
    path: "/bitcoin/network/icmp-message/sum/year",
    name: "Icmp messages",
    component: icmpMessage_sum ,
    layout: "/admin"
  },
  {
    path: "/bitcoin/network/interface-bytes/sum/year",
    name: "interface bytes",
    component: interfacebytes_sum ,
    layout: "/admin"
  },
  {
    path: "/bitcoin/network/ip-packet/sum/year",
    name: "ip packet",
    component: ipPacket_sum ,
    layout: "/admin"
  },
  {
    path: "/bitcoin/network/tcp-segment/sum/year",
    name: "TCP Segment",
    component: tcpSegment_sum ,
    layout: "/admin"
  },
  {
    path: "/bitcoin/network/udp-datagram/sum/year",
    name: "interface bytes",
    component: udpDatagram_sum ,
    layout: "/admin"
  },
  {
    path: "/bitcoin/block-size/total/year",
    name: "block size",
    component: blockSize_sum,
    layout: "/admin"
  },
  {
    path: "/bitcoin/block-size/cumulative/year",
    name: "block size",
    component: blockSize_total,
    layout: "/admin"
  },
  {
    path: "/bitcoin/block-size/average/year",
    name: "block size",
    component: blockSize_average,
    layout: "/admin"
  },
  {
    path: "/bitcoin/block-size/value/year",
    name: "block size",
    component: rateOfChangeSize,
    layout: "/admin"
  },
  {
    path: "/bitcoin/blocks/mining-interval/average/year",
    name: "mining interval",
    component: medianconfirmationtime,
    layout: "/admin"
  },
  {
    path: "/bitcoin/blocks/difficulty/average/year",
    name: "Difficulty",
    component: difficulty,
    layout: "/admin"
  },
  {
    path: "/bitcoin/blocks/mining-revenue/total/year",
    name: "Mining Revenue",
    component: miningRevenue,
    layout: "/admin"
  },
  {
    path: "/bitcoin/blocks/whole-revenue/total/year",
    name: "whole revenue",
    component: totalRevenue,
    layout: "/admin"
  },
  {
    path: "/bitcoin/blocks/stripped-block-size/average/year",
    name: "stripped block size",
    component: averageStrippedsize,
    layout: "/admin"
  },
  {
    path: "/bitcoin/blocks/block-weight/average/year",
    name: "block weight",
    component: averageWeight,
    layout: "/admin"
  },
  {
    path: "/bitcoin/blocks/empty-blocks/total/year",
    name: "Empty blocks",
    component: emptyblocks,
    layout: "/admin"
  },
  {
    path: "/bitcoin/blocks/insufficient/block-size/total/year",
    name: "block size",
    component: insufficientSize,
    layout: "/admin"
  },
  {
    path: "/bitcoin/blocks/insufficient/stripped-block-size/total/year",
    name: "stripped block size",
    component: insufficientStrippedsize,
    layout: "/admin"
  },
  {
    path: "/bitcoin/blocks/stripped-block-size/total/year",
    name: "stripped block size",
    component: sumStrippedsize,
    layout: "/admin"
  },
  {
    path: "/bitcoin/blocks/block-weight/total/year",
    name: "block weight",
    component: sumWeight,
    layout: "/admin"
  },
  {
    path: "/bitcoin/blocks/clustering",
    name: "clustering",
    component: clustering,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/number-of-transaction/total",
    name: "Number of Transaction",
    component: sumOfTx,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/number-of-transaction/average",
    name: "Number of Transaction",
    component: averageOfTx,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/number-of-transaction/cumulative",
    name: "Number of Transaction",
    component: totalTx,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/vout-value/total",
    name: "transaction outputs",
    component: totalOutput,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/number-of-utxo/total",
    name: "Number of UTXOs",
    component: utxoCount,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/number-of-utxo/cumulative",
    name: "Number of UTXOs",
    component: nUtxo,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/transaction-volume/rate-of-mining-revenue/value",
    name: "transaction volume",
    component: costOfTxVolume,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/number-of-transaction/rate-of-mining-revenue/value",
    name: "number of transaction",
    component: costPerTx,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/fee/total",
    name: "total Fee",
    component: totalFee,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/number-of-vin/total",
    name: "Number of inputs",
    component: totalNumberofvin,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/number-of-vin/average",
    name: "Number of inputs",
    component: averageNumberofvin,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/number-of-vout/total",
    name: "Number of outputs",
    component: totalNumberofVout,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/number-of-vout/average",
    name: "Number of outputs",
    component: averageNumberofVout,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/number-of-transaction/ratio-of-inout-to-output/value",
    name: "number of transaction",
    component: averageRatioofInout,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/prediction-number-of-transaction/block",
    name: "prediction number of transaction",
    component: predictionNumberofTransaction,
    layout: "/admin"
  },  {
      path: "/bitcoin/transaction/rate-of-change-size/value/year",
      name: "Rate of Change Size",
      component: rateOfChangeSize,
      layout: "/admin"
    },
  {
    path: "/bitcoin/transaction/number-of-transaction/rate-of-change/value",
    name: "number of transaction",
    component: rateOfChangeTransaction,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/vout-value/rate-of-change",
    name: "transaction outputs",
    component: rateOfChangeOutput,
    layout: "/admin"
  },
  {
    path: "/bitcoin/transaction/ddos",
    name: "DDos",
    component: ddos,
    layout: "/admin"
  },
  {
    path: "/bitcoin/explorer/blockInfo/:height",
    name: "Block Info",
    component: blockInfo,
    layout: "/admin"
  },
  {
    path: "/bitcoin/explorer/txInfo/:txid",
    name: "Transaction Info",
    component: transactionInfo,
    layout: "/admin"
  },
  {
    path: "/bitcoin/explorer/addrInfo/:addr",
    name: "Address Info",
    component: addressInfo,
    layout: "/admin"
  },
  {
    path: "/monitering/blockchain_chart/bandwidthUsage",
    name: "Blockchain Chart",
    component: BandwidthUsage,
    layout: "/admin"
  },
  {
    path: "/monitering/blockchain_chart/bitcoinAddress",
    name: "Blockchain Chart",
    component: BitcoinAddress,
    layout: "/admin"
  },
  {
    path: "/monitering/blockchain_chart/block",
    name: "Blockchain Chart",
    component: Block,
    layout: "/admin"
  },
  {
    path: "/monitering/blockchain_chart/blockwallet",
    name: "Blockchain Chart",
    component: BlockchainWallet,
    layout: "/admin"
  },
  {
    path: "/monitering/blockchain_chart/functionTimings",
    name: "Blockchain Chart",
    component: FunctionTimings,
    layout: "/admin"
  },
  {
    path: "/monitering/blockchain_chart/mining",
    name: "Blockchain Chart",
    component: Mining,
    layout: "/admin"
  },
  {
    path: "/monitering/blockchain_chart/mempool",
    name: "Blockchain Chart",
    component: Mempool,
    layout: "/admin"
  },
  {
    path: "/monitering/blockchain_chart/p2p_messages",
    name: "Blockchain Chart",
    component: P2P_Messages,
    layout: "/admin"
  },
  {
    path: "/monitering/blockchain_chart/peers",
    name: "Blockchain Chart",
    component: Peers,
    layout: "/admin"
  },
  {
    path: "/monitering/blockchain_chart/scriptTypes",
    name: "Blockchain Chart",
    component: Script_Types,
    layout: "/admin"
  },
  {
    path: "/monitering/blockchain_chart/systemMetric",
    name: "Blockchain Chart",
    component: System_metric,
    layout: "/admin"
  },
  {
    path: "/monitering/blockchain_chart/transaction",
    name: "Blockchain Chart",
    component: Transaction_M,
    layout: "/admin"
  },
  {
    path: "/monitering/blockchain_chart/unspentTxOutputSet",
    name: "Blockchain Chart",
    component: Unspent_tx_output_set,
    layout: "/admin"
  },
  {
    path: "/hyperledger/block/blocks",
    name: "Hyperlegeger Block",
    component: hyperledgerBlock,
    layout: "/admin"
  },
  {
    path: "/hyperledger/transaction/transactions",
    name: "Hyperlegeger Transaction",
    component: hyperledgerTransaction,
    layout: "/admin"
  },
  {
    path: "/hyperledger/block/total_block",
    name: "Hyperlegeger Total Block",
    component: hyperledgerTotalBlock,
    layout: "/admin"
  },
  {
    path: "/hyperledger/transaction/total_transaction",
    name: "Hyperlegeger Total Transaction",
    component: hyperledgerTotalTransaction,
    layout: "/admin"
  },
  {
    path: "/ethereum/node/buffer-size/average/year",
    name: "buffer size",
    component: ethereumBuffersize,
    layout: "/admin"
  },
  {
    path: "/ethereum/node/cached-size/average/year",
    name: "cached size",
    component: ethereumCachedSize,
    layout: "/admin"
  },
  {
    path: "/ethereum/node/cpu/average/year",
    name: "CPU Usage",
    component: ethereumUsed_CPU,
    layout: "/admin"
  },
  {
    path: "/ethereum/node/memory/average/year",
    name: "Memory Usage",
    component: ethereumUsed_memory,
    layout: "/admin"
  },
  {
    path: "/ethereum/blocks/number-of-block/total/year",
    name: "number of block",
    component: numberOfBlock_sum,
    layout: "/admin"
  },
  {
    path: "/ethereum/blocks/number-of-block/cumulated-value/year",
    name: "Number of block",
    component: numberOfBlock_total,
    layout: "/admin"
  },
  {
    path: "/ethereum/blocks/number-of-uncles/average/year",
    name: "number of uncles",
    component: numberOfUncles_avg,
    layout: "/admin"
  },
  {
    path: "/ethereum/blocks/number-of-uncles/total/year",
    name: "number of uncles",
    component: numberOfUncles_sum,
    layout: "/admin"
  },
  {
    path: "/ethereum/blocks/number-of-uncles/cumulated-value/year",
    name: "number of uncles",
    component: numberOfUncles_total,
    layout: "/admin"
  },
  {
    path: "/ethereum/blocks/size-of-block/average/year",
    name: "block size",
    component: sizeOfBlock_avg,
    layout: "/admin"
  },
  {
    path: "/ethereum/blocks/size-of-block/total/year",
    name: "block size",
    component: sizeOfBlock_sum,
    layout: "/admin"
  },
  {
    path: "/ethereum/blocks/size-of-block/cumulative/year",
    name: "block size",
    component: sizeOfBlock_total,
    layout: "/admin"
  },
  {
    path: "/ethereum/network/difficulty/Total/year",
    name: "difficulty",
    component: difficulty_sum,
    layout: "/admin"
  },
  {
    path: "/ethereum/network/difficulty/average/year",
    name: "difficulty",
    component: difficulty_avg,
    layout: "/admin"
  },
  {
    path: "/ethereum/transaction/gas-used/total/year",
    name: "gas used",
    component: gasUsed_total,
    layout: "/admin"
  },
  {
    path: "/ethereum/transaction/gas-used/average/year",
    name: "gas used",
    component: gasUsed_avg,
    layout: "/admin"
  },
  {
    path: "/ethereum/transaction/gas-used/summation/year",
    name: "gas used",
    component: gasUsed_sum,
    layout: "/admin"
  },
  {
    path: "/ethereum/transaction/number-of-transactions/cumulated-value/year",
    name: "number of transaction",
    component: numberOfTx_total,
    layout: "/admin"
  },
  {
    path: "/ethereum/transaction/number-of-transactions/average/year",
    name: "number of transactions",
    component: numberOfTx_avg,
    layout: "/admin"
  },
  {
    path: "/ethereum/transaction/number-of-transactions/total/year",
    name: "number of transactions",
    component: numberOfTx_sum,
    layout: "/admin"
  },
  {
    path: "/ethereum/smartcontract/creation/total",
    name: "creation",
    component: smartcontract_total,
    layout: "/admin"
  },
  {
    path: "/ethereum/smartcontract/creation/cumulative",
    name: "creation",
    component: smartcontract_cumulative,
    layout: "/admin"
  },
  {
    path: "/ethereum/smartcontract/calling/total",
    name: "calling",
    component: smartcontract_calling_total,
    layout: "/admin"
  },
  {
    path: "/ethereum/smartcontract/calling/cumulative",
    name: "calling",
    component: smartcontract_calling_cumulative,
    layout: "/admin"
  },
  {
    path: "/ethereum/smartcontract/distribution/gasused",
    name: "Average gasused",
    component: smartcontract_contribution_gasused,
    layout: "/admin"
  },
  {
    path: "/ethereum/smartcontract/distribution/number-of-account",
    name: "Average Account",
    component: smartcontract_contribution_account,
    layout: "/admin"
  },
  {
    path: "/ethereum/smartcontract/distribution/recently-called",
    name: "number of recently called",
    component: smartcontract_contribution_recentlyCalled,
    layout: "/admin"
  },
  {
    path: "/advanced_analysis/management/ethereum_node_discovery",
    name: "Ethereum Node Discovery",
    component: ethereum_node_discovery,
    layout: "/admin"
  },
  {
    path: "/advanced_analysis/management/topology",
    name: "topology",
    mini: "topology",
    component: topology,
    layout: "/admin"
  },
  {
    path: "/advanced_analysis/management/network_monitoring",
    name: "Network Monitoring",
    mini: "Network Monitoring",
    component: network_monitoring,
    layout: "/admin"
  },
  {
    path: "/advanced_analysis/management/cmpBlock",
    name: "Compact Block Propagation",
    mini: "Compact Block Propagation",
    component: cmpBlock,
    layout:"/admin"
  },
  {
    path: "/advanced_analysis/management/mempool",
    name: "mempool similarity",
    mini: "mempool similarity",
    component: mempool,
    layout:"/admin"
  },
];

export default componentRoutes;
