 
export interface BoxPlotData {
    lower: number;
    q1: number;
    median: number;
    q3: number;
    upper: number;
    mean: number;
    outliers?: number[];
    year: string;
  }
  