import MainHeader from '../../atoms/MainHeader'

export default function DetailsEmployee({ data }) {
  console.log('🚀 ~ file: DetailsFacility.jsx:4 ~ DetailsFacility ~ data:', data)

  return (
    <div>
      <MainHeader title={` تفاصيل الموظف : ${data?.name} `} />

      <div className='grid grid-cols-2 p-4 gap-y-4'>
        <div className='flex gap-2'>
          <p className='text-[#787EFF] font-bold'>الاسم:</p>
          <p>{data.name}</p>
        </div>
        <div className='flex gap-2'>
          <p className='text-[#787EFF] font-bold'>المسمى الوظيفي:</p>
          <p>{data.position}</p>
        </div>
      </div>
    </div>
  )
}
