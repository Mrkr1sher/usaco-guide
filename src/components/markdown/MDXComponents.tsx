import * as React from 'react';
import Asterisk from '../Tooltip/Asterisk';
import TextTooltip from '../Tooltip/TextTooltip';
import FocusProblem from './FocusProblem';
import HTMLComponents from './HTMLComponents';
import { IncompleteSection } from './IncompleteSection';
import Info from './Info';
import {
  CPPSection,
  JavaSection,
  LanguageSection,
  PySection,
} from './LanguageSection';
import Optional from './Optional';
import { ReadingResource, ReadingResourcesList } from './ReadingResourcesList';
import Spoiler from './Spoiler';
import { VideoResource, VideosList } from './VideosList';
import Warning from './Warning';
import Youtube from './Youtube';

const MATHDIV = props => {
  return (
    <div
      className={props.className}
      data-latex={`$$${props.latex}$$`}
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  );
};
const MATHSPAN = props => {
  return (
    <span
      className={props.className}
      data-latex={`$${props.latex}$`}
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  );
};

export const components = {
  Spoiler,
  Info,
  Warning,
  Optional,
  FocusProblem,
  ReadingResources: ReadingResourcesList,
  VideoResources: VideosList,
  ReadingResource,
  VideoResource,
  TextTooltip,
  LanguageSection,
  CPPSection,
  JavaSection,
  PySection,
  IncompleteSection,
  Asterisk,
  Youtube,
  MATHDIV,
  MATHSPAN,

  ...HTMLComponents,
};
