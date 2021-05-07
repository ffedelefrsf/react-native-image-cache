import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  ImageURISource,
  StyleProp,
} from 'react-native';
import React from 'react';

export interface DownloadOptions {
  headers?: { [name: string]: string };
}

export interface ImageState {
  error: boolean;
  imageLoaded: boolean;
  showDefault: boolean;
  uri: string | undefined;
}

export interface ImageProps {
  cacheKey?: string;
  defaultSource?: ImageURISource | number;
  onError: (error: { nativeEvent: { error: Error } }) => void;
  options?: DownloadOptions;
  source: string;
  style?: StyleProp<ImageStyle>;
  thumbnailSource?: string;
}

interface IProps {
  cacheKey?: string;
  imageAnimationDuration?: number;
  loadingImageComponent?: React.ReactNode;
  loadingImageStyle?: StyleProp<ImageStyle>;
  loadingSource?: ImageSourcePropType;
  onError: (error: { nativeEvent: { error: Error } }) => void;
  options?: DownloadOptions;
  resizeMode?: ImageResizeMode;
  source: string;
  style?: StyleProp<ImageStyle>;
  thumbnailAnimationDuration?: number;
  thumbnailSource: string;
}