

/* IMPORT */

import * as _ from 'lodash';
import * as React from 'react';

/* SHOULD COMPONENT UPDATE */

function shouldComponentUpdate ( ...rules ) {

  return function wrapper ( WrappedComponent ) {

    return class PropsChangeComponent extends React.Component<any, any> {

      changedRules = {}; // path => value
      toggledRules = {}; // path => toggled (boolean)

      constructor ( props ) {

        super ( props );

        rules.filter ( _.isString ).forEach ( ( rule: string ) => { // Getting initial values

          this.changedRules[rule] = _.get ( props, rule );

        });

      }

      isRuleChanged ( nextProps, rule ) {

        if ( _.isString ( rule ) ) { // rule => path, checking if props changed

          const value = _.get ( nextProps, rule );

          if ( this.changedRules[rule] === value ) return false;

          this.changedRules[rule] = value;

          return true;

        } else if ( _.isArray ( rule ) ) { // rule => [path, valuePath], checking if prop's toggle status changed

          const [path, valuePath] = rule,
                toggled = _.get ( nextProps, path ) === _.get ( nextProps, valuePath );

          if ( this.toggledRules[path] === toggled ) return false;

          this.toggledRules[path] = toggled;

          return true;

        } else if ( _.isFunction ( rule ) ) { // Custom logic

          return !!rule ( this.props, nextProps );

        } else if ( _.isBoolean ( rule ) ) { // Constant result

          return rule;

        }

        return false;

      }

      shouldComponentUpdate ( nextProps ) {

        return !!rules.find ( rule => this.isRuleChanged ( nextProps, rule ) );

      }

      render () {

        return <WrappedComponent {...this.props} />;

      }

    } as any;

  };

}

/* EXPORT */

export default shouldComponentUpdate;
