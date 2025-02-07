import { Chip, Sheet, Stack, Typography } from '@mui/joy';
import { DatasourceType } from '@prisma/client';
import React from 'react';

type Props = {
  onSelect: (type: DatasourceType) => any;
};

type DatsourceOption = {
  type: DatasourceType;
  label: string;
  description: string;
  icon?: any;
  disabled?: boolean;
};

const options: DatsourceOption[] = [
  {
    type: DatasourceType.text,
    label: 'Text',
    description: 'Paste some text',
    icon: undefined,
  },
  {
    type: DatasourceType.web_page,
    label: 'Web Page',
    description: 'Crawl text from a web page',
    icon: undefined,
  },
  {
    type: 'file' as any,
    label: 'File',
    description: 'It can be: PDF, CSV, JSON, Text, PowerPoint, Word, Excel',
    disabled: false,
  },
  {
    type: 'notion' as any,
    label: 'Notion',
    description: 'Download a Notion notebook',
    // icon: '/notion-logo.svg',
    disabled: true,
  },
];

const DatasourceOptions = (props: Props) => {
  return (
    <div className="flex space-x-4">
      <Stack className="space-y-4" direction={'row'} flexWrap={'wrap'}>
        {options.map((each) => (
          <Sheet
            key={each.type}
            variant="outlined"
            sx={{
              borderRadius: 'md',
              p: 1.5,
              width: '100%',
              ':hover': { cursor: 'pointer' },
            }}
            onClick={
              each.disabled ? undefined : () => props.onSelect(each.type)
            }
          >
            {each.icon && <img src={each.icon} className="w-16" alt="" />}

            <Stack gap={1}>
              <Stack gap={1} direction="row">
                <Typography level="body1" fontWeight={'bold'}>
                  {each.label}
                </Typography>
                {each.disabled && (
                  <Chip variant="soft" color="neutral" size="sm">
                    Coming Soon
                  </Chip>
                )}
              </Stack>
              <Typography level="body2">{each.description}</Typography>
            </Stack>
          </Sheet>
        ))}
      </Stack>
    </div>
  );
};

export default DatasourceOptions;
