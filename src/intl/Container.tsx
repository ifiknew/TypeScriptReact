import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface ContainerProps {
  language: string,
  field: string,
  onChange(field: string, value: string): void,
}

class Container extends React.Component<ContainerProps, {}> {

  render() {
    return (
      <div className="Container">
        <div className="OptionGroup">
          <div className="Row">
            <div className="Label"><FormattedMessage id="language" /></div>
            <div className="Control">
              <FormattedMessage id="chinese" />
              <input
                type="radio"
                checked={this.props.language === 'zh-CN'}
                onClick={() => this.props.onChange('language', 'zh-CN')}
              />
              <FormattedMessage id="english" />
              <input
                type="radio"
                checked={this.props.language === 'en'}
                onClick={() => this.props.onChange('language', 'en')}
              />
            </div>
          </div>
          <div className="Row">
            <div className="Label"><FormattedMessage id="field" /></div>
            <div className="Control">
              <FormattedMessage id="fieldBasic" />
              <input
                type="radio"
                checked={this.props.field === 'basic'}
                onClick={() => this.props.onChange('field', 'basic')}
              />
              <FormattedMessage id="fieldEducation" />
              <input
                type="radio"
                checked={this.props.field === 'edu'}
                onClick={() => this.props.onChange('field', 'edu')}
              />
            </div>
          </div>
        </div>
        <div className="VisionGroup">
          <div><FormattedMessage id="affairHomePage" /></div>
          <div><FormattedMessage id="fundRepo" /></div>
          <div><FormattedMessage id="createAffairMessage" values={{userName: '刘老师', affairName: '软工二'}}/></div>
          <div><FormattedMessage id="receiveFundMessage" values={{ userName: '刘老师', amount: 3000 }} /></div>
        </div>
      </div>
    )
  }
}

export default Container
