/**
 *  Entrance of features
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 */
'use strict';
import _ from 'lodash';
import about from './about/main';
import common from './common/main';
import home from './home/main';

export default _.flatten([about, common, home]);