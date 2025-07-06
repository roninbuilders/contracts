import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34124,
  address: '0x721c0086cc4f335407cc84a38ce7dcb1560476b0' as const,
  contract_name: 'ModuleRulesetBindings',
  display_name: 'Module Ruleset Bindings',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1745604649,
  abi: [
  {
    "name": "CreatorTokenTransferValidator__AdminCannotAssignRulesetToRulesetIdCustom",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__CallerDoesNotOwnList",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__RulesetIsNotContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__RulesetIsNotPure",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__RulesetIsNotRegistered",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RulesetBindingUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "rulesetId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "oldRuleset",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newRuleset",
        "indexed": true
      }
    ]
  },
  {
    "name": "RulesetRegistered",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "delegatedRuleset",
        "indexed": true
      }
    ]
  },
  {
    "name": "ALLOWED_OPCODES",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "bindRuleset",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "rulesetId"
      },
      {
        "type": "address",
        "name": "ruleset"
      }
    ],
    "outputs": []
  },
  {
    "name": "registerRuleset",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "ruleset"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract