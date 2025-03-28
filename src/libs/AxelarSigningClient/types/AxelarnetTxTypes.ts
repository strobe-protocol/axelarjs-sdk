import {
  CallContractRequest,
  ConfirmDepositRequest,
  ExecutePendingTransfersRequest,
  RegisterIBCPathRequest,
  AddCosmosBasedChainRequest,
  LinkRequest,
  RegisterAssetRequest,
  RouteIBCTransfersRequest,
  RegisterFeeCollectorRequest,
  RouteMessageRequest,
  protobufPackage,
} from "@axelar-network/axelarjs-types/axelar/axelarnet/v1beta1/tx";
import { Registry } from "@cosmjs/proto-signing";

const TxTypeUrlMap = {
  AxelarnetLinkRequest: `/${protobufPackage}.LinkRequest`,
  AxelarnetCallContractRequest: `/${protobufPackage}.CallContractRequest`,
  AxelarnetConfirmDepositRequest: `/${protobufPackage}.ConfirmDepositRequest`,
  AxelarnetExecutePendingTransfersRequest: `/${protobufPackage}.ExecutePendingTransfersRequest`,
  AxelarnetRegisterIBCPathRequest: `/${protobufPackage}.RegisterIBCPathRequest`,
  AxelarnetAddCosmosBasedChainRequest: `/${protobufPackage}.AddCosmosBasedChainRequest`,
  AxelarnetRegisterAssetRequest: `/${protobufPackage}.RegisterAssetRequest`,
  AxelarnetRouteIBCTransfersRequest: `/${protobufPackage}.RouteIBCTransfersRequest`,
  AxelarnetRegisterFeeCollectorRequest: `/${protobufPackage}.RegisterFeeCollectorRequest`,
  AxelarnetRouteMessageRequest: `/${protobufPackage}.RouteMessageRequest`,
};

export const registerAxelarnetTxTypes = (registry: Registry) => {
  registry.register(TxTypeUrlMap.AxelarnetLinkRequest, LinkRequest);
  registry.register(TxTypeUrlMap.AxelarnetCallContractRequest, CallContractRequest);
  registry.register(TxTypeUrlMap.AxelarnetConfirmDepositRequest, ConfirmDepositRequest);
  registry.register(
    TxTypeUrlMap.AxelarnetExecutePendingTransfersRequest,
    ExecutePendingTransfersRequest
  );
  registry.register(TxTypeUrlMap.AxelarnetRegisterIBCPathRequest, RegisterIBCPathRequest);
  registry.register(TxTypeUrlMap.AxelarnetAddCosmosBasedChainRequest, AddCosmosBasedChainRequest);
  registry.register(TxTypeUrlMap.AxelarnetRegisterAssetRequest, RegisterAssetRequest);
  registry.register(TxTypeUrlMap.AxelarnetRouteIBCTransfersRequest, RouteIBCTransfersRequest);
  registry.register(TxTypeUrlMap.AxelarnetRegisterFeeCollectorRequest, RegisterFeeCollectorRequest);
  registry.register(TxTypeUrlMap.AxelarnetRouteMessageRequest, RouteMessageRequest);
};
