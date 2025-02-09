declare module 'react-plotly.js' {
    import { Component } from 'react';
    import Plotly from 'plotly.js';
  
    interface PlotParams {
      data: Partial<Plotly.PlotData>[];
      layout?: Partial<Plotly.Layout>;
      config?: Partial<Plotly.Config>;
      frames?: Partial<Plotly.Frame>[];
      revision?: number;
      useResizeHandler?: boolean;
      style?: React.CSSProperties;
      className?: string;
      onInitialized?: (figure: Readonly<Plotly.Figure>, graphDiv: HTMLElement) => void;
      onPurge?: (figure: Readonly<Plotly.Figure>, graphDiv: HTMLElement) => void;
      onUpdate?: (figure: Readonly<Plotly.Figure>, graphDiv: HTMLElement) => void;
      onError?: (error: any, graphDiv: HTMLElement) => void;
      debug?: boolean;
    }
  
    class Plot extends Component<PlotParams> {}
  
    export default Plot;
  }
  