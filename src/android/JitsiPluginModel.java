package com.cordova.plugin.jitsi;

public class JitsiPluginModel {

    public interface OnJitsiPluginStateListener {
        void stateChanged();
    }

    private static JitsiPluginModel mInstance;
    private OnJitsiPluginStateListener mListener;
    private String mState;

    private JitsiPluginModel() {}

    public static JitsiPluginModel getInstance() {
        if(mInstance == null) {
            mInstance = new JitsiPluginModel();
        }
        return mInstance;
    }

    public void setListener(OnJitsiPluginStateListener listener) {
        mListener = listener;
    }

    public void changeState(String state) {
        if(mListener != null) {
            mState = state;
            notifyStateChange();
        }
    }

    public String getState() {
        return mState;
    }

    private void notifyStateChange() {
        mListener.stateChanged();
    }
}
