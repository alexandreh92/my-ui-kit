import React, { useCallback, useMemo, useState } from 'react';

import { iconList } from 'icomoon-react';
import _ from 'lodash';
import { ThemeProvider } from 'styled-components';

import iconSet from '../../../src/config/icons/selection.json';
import Input from '../../../src/elements/Input';
import Heading from '../../../src/elements/Heading';
import Icon, { IconName } from '../../../src/addons/Icon';
import {
  IconsWrapper,
  IconWrapperHeader,
  IconsContainer,
  IconWrapper,
} from './styles';
import { theme } from '../../../src/globals/defaultTheme';

const IconContainer = () => {
  const [search, setSearch] = useState('');

  const icons = useMemo(
    () =>
      iconList(iconSet).filter((value) =>
        value.split(' ').some((token) => token.toLowerCase().startsWith(search))
      ),
    [search]
  );

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const debounce = _.debounce(handleSearchChange, 500);

  return (
    <ThemeProvider theme={theme}>
      <IconsWrapper>
        <IconWrapperHeader>
          <Input icon="search" placeholder="Search" onChange={debounce} />
        </IconWrapperHeader>
        <IconsContainer>
          {icons.map((name) => (
            <IconWrapper key={name}>
              <Icon icon={name as IconName} />
              <Heading style={{ marginTop: 10 }} weight="body-small">
                {name}
              </Heading>
            </IconWrapper>
          ))}
        </IconsContainer>
      </IconsWrapper>
    </ThemeProvider>
  );
};

export default IconContainer;
