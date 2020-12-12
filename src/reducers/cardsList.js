import { CREATE_CARDS } from '../actions/types'

export default function (state=[], action) {
    switch (action.type) {
        case CREATE_CARDS:
            const list = action.payload[0].map(card => (
                {
                    id: card.id, 
                    front: card.present, 
                    back: [card.future, card.aorist, card.perfect, card.prf_mid_pass, card.aor_pass],
                    def: card.def_en
                }
                ))
        return [...state, ...list];
        default:
            return [...state];
    }
}