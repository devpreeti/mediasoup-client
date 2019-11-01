import EnhancedEventEmitter from '../EnhancedEventEmitter';
import RemoteSdp from './sdp/RemoteSdp';
import { IceParameters } from './../Transport';
import { SctpStreamParameters } from '../SctpParameters';
declare class Handler extends EnhancedEventEmitter {
    protected _transportReady: boolean;
    protected readonly _remoteSdp: RemoteSdp;
    protected readonly _pc: any;
    protected _hasDataChannelMediaSection: boolean;
    protected _nextSctpStreamId: number;
    constructor({ iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints }: {
        iceParameters: any;
        iceCandidates: any;
        dtlsParameters: any;
        sctpParameters: any;
        iceServers: any[];
        iceTransportPolicy: string;
        additionalSettings: any;
        proprietaryConstraints: any;
    });
    close(): void;
    getTransportStats(): Promise<any>;
    updateIceServers({ iceServers }: {
        iceServers: RTCIceServer[];
    }): Promise<void>;
    _setupTransport({ localDtlsRole, localSdpObject }: {
        localDtlsRole: 'client' | 'server';
        localSdpObject?: any;
    }): Promise<void>;
}
export declare class SendHandler extends Handler {
    private readonly _sendingRtpParametersByKind;
    private readonly _sendingRemoteRtpParametersByKind;
    private readonly _stream;
    private readonly _mapIdTrack;
    private _lastId;
    constructor(data: any);
    send({ track, encodings, codecOptions }: {
        track: any;
        encodings: any;
        codecOptions: any;
    }): Promise<any>;
    stopSending({ localId }: {
        localId: string;
    }): Promise<void>;
    replaceTrack({ localId, track }: {
        localId: string;
        track: MediaStreamTrack;
    }): Promise<never>;
    setMaxSpatialLayer({ local, spatialLayer }: {
        local: true;
        spatialLayer: number;
    }): Promise<never>;
    getSenderStats({ localId }: {
        localId: string;
    }): Promise<never>;
    sendDataChannel({ ordered, maxPacketLifeTime, maxRetransmits, label, protocol, priority }: SctpStreamParameters): Promise<any>;
    restartIce({ iceParameters }: {
        iceParameters: IceParameters;
    }): Promise<void>;
}
export default class Chrome55 {
    static readonly label: string;
    static getNativeRtpCapabilities(): Promise<any>;
    static getNativeSctpCapabilities(): Promise<any>;
    constructor({ direction, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, extendedRtpCapabilities }: {
        direction: string;
        iceParameters: any;
        iceCandidates: any[];
        dtlsParameters: any;
        sctpParameters: any;
        iceServers: any[];
        iceTransportPolicy: string;
        additionalSettings: any;
        proprietaryConstraints: any;
        extendedRtpCapabilities: any;
    });
}
export {};
//# sourceMappingURL=Chrome55.d.ts.map